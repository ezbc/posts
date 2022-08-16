import styled from 'styled-components';
import usePosts from 'features/PostState/usePosts';
import Button from 'ui/Button';

const LoadMore = styled(({ className }) => {
    const { loadNextPage, pagesLeftToLoad } = usePosts();

    return (
        pagesLeftToLoad && (
            <Button className={className} onClick={loadNextPage}>
                Load More Posts
            </Button>
        )
    );
})``;

export default LoadMore;
