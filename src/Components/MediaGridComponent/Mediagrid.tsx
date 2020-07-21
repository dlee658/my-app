import React, { useState, useEffect } from 'react';
import MediaCard from '../MediaCardComponent/MediaCard';
import { Grid } from '@material-ui/core';
import './MediaGrid.css';

interface IState {
    links: any[];
    data: any[];
}
interface IMediaGridProps {
    SearchQuery: (string | null);
    StartDate: (Date | null);
    EndDate: (Date | null);
}
function MediaGrid(props: IMediaGridProps) {
    const [ItemArray, setItemArray] = useState<IState[]>([{ links: [], data: [] }]);

    useEffect(() => {
        fetch('https://images-api.nasa.gov/search?media_type=image&q=' + props.SearchQuery + '&year_start=' + props.StartDate?.getFullYear() + '&year_end=' + props.EndDate?.getFullYear())
            .then(response => response.json())
            .then(response => {
                setItemArray(response.collection.items)
            })
            .catch(() => console.log("it didn't work")
            );

    }, [props.SearchQuery, props.EndDate, props.StartDate]);

    return (
        <div>
        </div>
    )
}

export default MediaGrid