import React, { useState } from 'react';
import './App.css';

export default function App() {
	const [markdown, SetMarkdown] = useState('#Type');

	return (
		<div className='app'>
			<textarea  value={markdown} />
			<div className='preview' /> {markdown}
		</div>
	);
}
