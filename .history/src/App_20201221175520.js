import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown'
import './App.css';

export default function App() {
	const [markdown, SetMarkdown] = useState('#Type');

	function handleChange(e) {
		SetMarkdown(e.target.value);
	}



	return (
		<div className='app'>
			<textarea onChange={handleChange} value={markdown} />
			<ReactMarkdown></ReactMarkdown>
		</div>
	);
}
