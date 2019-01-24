import React from 'react';
import SearchBox, { SearchContainer, SearchInput } from './';

describe('<SeachBox />', () => {
    it('should render', () => {
        const onChangeMock = jest.fn();
        const onSubmitMock = jest.fn();
        const wrapper = shallow(
            <SearchBox
                value=''
                onChange={onChangeMock}
                onSubmit={onSubmitMock}
                placeholder='search'
                autoComplete='off'
            />);
        const form = wrapper.find(SearchContainer);
        const input = wrapper.find(SearchInput);
        expect(form.length).toBe(1);
        form.simulate('submit', { key: 'Enter', keyCode: 13 })
        expect(onSubmitMock).toHaveBeenCalled();
    });

   it('should meet accessibility guidelines', async () => {
		const wrapper = renderToHtml(<SearchBox />);
		const actual = await axe(wrapper);
        console.log(actual);
        expect(actual).toHaveNoViolations();
	});
});