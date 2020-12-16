import React, { useState } from 'react';
import './App.css';

export default function App() {
	const [markdown, SetMarkdown] = useState('#Type');

	return (
		<div className='app'>
			<textarea onChange={e } value={markdown} />
			<div className='preview' /> {markdown}
		</div>
	);
}
