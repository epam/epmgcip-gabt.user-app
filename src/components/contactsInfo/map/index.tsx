import React from 'react'
import {
	APIProvider,
	Map as GoogleMap,
	Marker
} from '@vis.gl/react-google-maps'
// import CustomMarkerIcon from '@/public/contact-info/Custom-marker.svg'

export const Map = () => {
	// const customMarkerIcon = {
	// 	url: '/public/contact-info/Custom-marker.svg',
	// 	size: 10,
	// 	scaledSize: 15
	// }
	if (process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY)
		return (
			<APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
				<GoogleMap
					style={{ width: '100%', height: '100%' }}
					defaultCenter={{ lat: 41.3093479554046, lng: 69.27150505941223 }}
					defaultZoom={17}
					gestureHandling={'greedy'}
					disableDefaultUI={true}
				>
					<Marker
						position={{ lat: 41.3093479554046, lng: 69.27150505941223 }}
						// icon={'/public/contact-info/Custom-marker.svg'}
					/>
				</GoogleMap>
			</APIProvider>
		)
	else return <div></div>
}
