function Card({ cover, title }) {
	return (
		<li className='card'>
            <img src={cover} alt={cover}/>
			<p>{title}</p>
            <div className='gradient'></div>
		</li>
	)
}

export default Card