import React, { useState } from 'react';
import './App.css';

export default function App() {
	const [markdown, SetMarkdown] = useState('#Type');

  function handleChange(e) {
    SetMarkdown(e.target.value)
  }

	return (
		<div className='app'>
			<textarea
				onChange={(e) => SetMarkdown(e.target.value)}
				value={markdown}
			/>
			<div className='preview' /> {markdown}
		</div>
	);
}
