import React, { useState } from 'react';
import marked from 'marked';
import './App.css';

export default function App() {
	const [markdown, SetMarkdown] = useState('#Type');

	function handleChange(e) {
		SetMarkdown(e.target.value);
	}

	const renderHTML = (props) => (
		<div
			className='preview'
			dangerouslySetInnerHTML={{ __html: marked(markdown) }}
		>
			{' '}
		</div>
	);

	return (
		<div className='app'>
			<textarea onChange={handleChange} value={markdown} />
			<div></div>
		</div>
	);
}
