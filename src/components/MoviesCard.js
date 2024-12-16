import { Card, Button } from 'react-bootstrap';

import {useState} from 'react';

export default function MovieCard({movieProp}) {

    const { title, description, director, year, genre } = movieProp;

    return (
        <Card className="my-3">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle>Description:</Card.Subtitle>
                <Card.Text>{description}</Card.Text>
                <Card.Subtitle>Director:</Card.Subtitle>
                <Card.Text>{director}</Card.Text>
                <Card.Subtitle>Year:</Card.Subtitle>
                <Card.Text>{year}</Card.Text>
                <Card.Subtitle>Genre:</Card.Subtitle>
                <Card.Text>{genre}</Card.Text>

            </Card.Body>
        </Card>
    )
}