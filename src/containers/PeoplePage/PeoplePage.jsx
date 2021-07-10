import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { getApiResource, changeHTTP } from "@utils/network";
import { API_PEOPLE } from "@constants/api";
import {
  getPeopleId,
  getPeopleImage,
  getPeoplePageId,
} from "@services/getPeopleData";
import PeopleList from "@components/PeoplePage/PeopleList";
import PeopleNavigation from "@components/PeoplePage/PeopleNavigation";

import { withErrorApi } from "@hoc-helpers/withErrorApi";
import { useQueryParams } from "@hooks/useQueryParams";

import styles from "./PeoplePage.module.css";

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPagee] = useState(null);
  const [counterPage, setCounterPage] = useState(1);
  const query = useQueryParams();
  const queryPage = query.get("page");
  

  const getResource = async (url) => {
    const res = await getApiResource(url);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);

        return {
          id: id,
          name: name,
          img: img,
        };
      });
      setPeople(peopleList);
      setPrevPage(changeHTTP(res.previous));
      setNextPagee(changeHTTP(res.next));
      setCounterPage(getPeoplePageId(url));
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResource(API_PEOPLE + queryPage);
  }, []);

  return (
    <>
      <PeopleNavigation
        getResource={getResource}
        prevPage={prevPage}
        nextPage={nextPage}
        counterPage={counterPage}
      />
      {people && <PeopleList people={people} />}
    </>
  );
};
PeoplePage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PeoplePage);
