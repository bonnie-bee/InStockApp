import React from 'react';
import ResultItem from './ResultItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './SearchResults.css';

const ResultsColumnTwo = props => {

        // 2nd column will contain the even array results
        let resultItems = props.items;
        let col2Array = resultItems.filter((a, i) => (i % 2));
        let resultsItemsForCol2;

        // if results are found from the search, create a ResultItem component for each result in the array
        if (resultItems) {
            // Split results array into 2 separate array of odd indexes and even indexes to fill in 2 columns
            resultsItemsForCol2 = col2Array.map(each => {
                return (
                    <CSSTransition key={each._id} timeout={500} classNames="fade">
                        <ListGroupItem id="resultItem">
                            <ResultItem key={each._id}  storeName={each.storeName} storeAddress={each.storeAddress} storePhone={each.storePhone}/>       
                        </ListGroupItem>
                    </CSSTransition>
                )
            })
        }
        return (
            <ListGroup>
                <TransitionGroup className="itemsList">
                    {resultsItemsForCol2}
                </TransitionGroup>
            </ListGroup>
        );
};

export default ResultsColumnTwo;