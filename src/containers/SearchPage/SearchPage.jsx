import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { debounce } from "lodash";
import { API_SEARCH } from "@constants/api";
import { getApiResource } from "@utils/network";
import { withErrorApi } from "@hoc-helpers/withErrorApi";
import { getPeopleId, getPeopleImage } from "@services/getPeopleData";

import UiInput from "@ui/UiInput";
import SearchPageInfo from "@components/SearchPage/SearchPageInfo";

import styles from "./SearchPage.module.css";

const SearchPage = ({ setErrorApi }) => {
  const [people, setPeople] = useState([]);
  const [inputSearchValue, setInputSearchValue] = useState("");

  const getResponse = async (param) => {
    const res = await getApiResource(API_SEARCH + param);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);
        return {
          id,
          name,
          img,
        };
      });
      setPeople(peopleList);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  const debouncedGetResponse = useCallback(
    debounce((value) => getResponse(value), 300),
    []
  );

  const handleSearch = (value) => {
    setInputSearchValue(value);
    debouncedGetResponse(value);
  };

  useEffect(() => {
    getResponse("");
  }, []);

  return (
    <>
      <h1 className="header__text">Search</h1>

      <UiInput
        value={inputSearchValue}
        handleSearch={handleSearch}
        placeholder="Input characters's name"
        classes={styles.input__search}
      />
      <SearchPageInfo people={people} />
    </>
  );
};

SearchPage.propTypes = {
  withErrorApi: PropTypes.func,
};
export default withErrorApi(SearchPage);
