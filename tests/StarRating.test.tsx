import { describe, test, expect } from 'vitest';
import { StarRating } from '../src';
import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';

const Wrapper = () => {
	const [, setRating] = useState<number>(0);
	return <StarRating onSetRating={setRating} />;
};

describe('StarRating', () => {

	// Renders the component with default props
	test('should render the component with default props', () => {
		const { container } = render(<StarRating defaultRating={3} />);
		expect(container).toBeInTheDocument();
	});

	// Renders the component with custom props
	test('should render the component with custom props', () => {
		const { container } = render(<StarRating defaultRating={7} maxRating={10} color="#000" size={32} borderColor="#fff" />);
		expect(container).toBeInTheDocument();
	});

	// Clicks on a star and sets the rating
	test('should set the rating when a star is clicked', () => {
		const { container } = render(<Wrapper />);
		const stars = container.querySelectorAll('button');
		fireEvent.click(stars[2]);
		expect(container).toHaveTextContent('3');
	});

	// Renders the component with a maximum rating greater than 10
	test('should render the component with a maximum rating greater than 10', () => {
		const { container } = render(<StarRating defaultRating={10} maxRating={15} />);
		expect(container).toBeInTheDocument();
	});

	// Clicks on the last star and sets the rating to the maximum rating
	test('should set the rating to the maximum rating when the last star is clicked', () => {
		const { container } = render(<Wrapper />);
		const stars = container.querySelectorAll('button');
		fireEvent.click(stars[4]);
		expect(container).toHaveTextContent('5');
	});

});
