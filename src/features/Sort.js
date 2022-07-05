import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'ui/Button';
import usePosts from 'features/PostState/usePosts';

function Sort({ className }) {
    const { fetchPosts, sortDirection } = usePosts();
    const [direction, setDirection] = useState('asc');

    return (
        <Button
            className={className}
            onClick={() => {
                fetchPosts({ sortDirection: direction });
                const newDirection = direction === 'desc' ? 'asc' : 'desc';
                setDirection(newDirection);
            }}
        >
            Sort
        </Button>
    );
}

export default styled(Sort)``;
