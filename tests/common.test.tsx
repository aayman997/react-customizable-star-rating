import {render} from "@testing-library/react";
import "jest-canvas-mock";
import * as React from "react";
import {StarRating} from "../src";

describe("Common render", () => {
	const mockSetRating = jest.fn();

	it("renders without crashing", () => {
		render(<StarRating onSetRating={mockSetRating} />);
	});
});
