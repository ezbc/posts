import { render, screen } from '@testing-library/react';
import App from './App';

test('Navigate to Activities we should see state management in list', () => {
    render(<App />);
    const linkElement = screen.getByText(/Activities/i);
    expect(linkElement).toBeInTheDocument();
    linkElement.click();
    const activity = screen.queryByText(/State management pattern/i);
    expect(activity).toBeInTheDocument();
});

test('Submit search I should see fewer results', () => {
    render(<App />);
    const linkElement = screen.getByText(/Activities/i);
    expect(linkElement).toBeInTheDocument();
    linkElement.click();
    const activity = screen.queryByText(/State management pattern/i);
    expect(activity).toBeInTheDocument();
});
