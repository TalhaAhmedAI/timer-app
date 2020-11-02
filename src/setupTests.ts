/* eslint-disable import/no-extraneous-dependencies */
import Enzyme from 'enzyme';
import '@testing-library/jest-dom';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new ReactSixteenAdapter() });
