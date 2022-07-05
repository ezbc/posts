import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'ui/Button';
import usePosts from 'features/PostState/usePosts';

function Sort({ className }) {
    const { handleSort } = usePosts();
    const [direction, setDirection] = useState('asc');

    return (
        <Button
            className={className}
            onClick={() => {
                handleSort(direction);
                const newDirection = direction === 'desc' ? 'asc' : 'desc';
                setDirection(newDirection);
            }}
        >
            Sort
        </Button>
    );
}

export default styled(Sort)``;
