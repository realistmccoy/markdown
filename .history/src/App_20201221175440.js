import React, { useState } from 'react';
import Reactmark
import './App.css';

export default function App() {
	const [markdown, SetMarkdown] = useState('#Type');

	function handleChange(e) {
		SetMarkdown(e.target.value);
	}

	const renderHTML = (props) => (
		<span
			className='preview'
			dangerouslySetInnerHTML={{ __html: marked(markdown) }}
		>
			{' '}
		</span>
	);

	return (
		<div className='app'>
			<textarea onChange={handleChange} value={markdown} />
			
		</div>
	);
}
