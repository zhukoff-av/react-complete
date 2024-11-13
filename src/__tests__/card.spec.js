import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../Card';
import '@testing-library/jest-dom';

describe('Card Component', () => {
    test('renders the Card component with correct number', () => {
        // Arrange: Render the component with a specific number prop
        render(<Card number={5} />);

        // Act: Find the element that contains "Card 5"
        const cardElement = screen.getByText(/Card 5/i);

        // Assert: Check if the element is in the document
        expect(cardElement).toBeInTheDocument();
    });

    test('applies the correct CSS classes', () => {
        // Arrange: Render the component
        const { container } = render(<Card number={1} />);

        // Act: Find the div element by CSS class name
        const cardDiv = container.firstChild;

        // Assert: Verify the element has the expected class names
        expect(cardDiv).toHaveClass('bg-gray-200 p-4 m-2 rounded shadow-md');
    });
});