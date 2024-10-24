"use client"

import calculateZoomLevel from "../../utils/calculateZoomLevel"
import { Box, CircularProgress } from "@mui/material"
import { Circle, GoogleMap, Marker } from "@react-google-maps/api"
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react"

type GoogleMapUIBoxProps = {
   coordinates: {
      lat: number
      lng: number
   }
   circle?: {
      radius: number
      options: {
         strokeColor: string
      }
   }
   width?: string
   height?: string
   mapRef: React.MutableRefObject<google.maps.Map | null>
   isLoaded: boolean
   markers?: {
      title: string
      coordinates: {
         lat: number
         lng: number
      }
   }[]
   setMapLoaded?: Dispatch<SetStateAction<boolean>> | null
}

const GoogleMapUIBox = ({
   coordinates,
   circle,
   width,
   height,
   mapRef,
   isLoaded = false,
   markers,
   setMapLoaded
}: GoogleMapUIBoxProps) => {
   const [zoom, setZoom] = useState(17)
   const containerStyle = {
      width: width || "100%",
      height: height || "650px"
   }

   const onMapLoad = useCallback(
      (map: google.maps.Map) => {
         mapRef.current = map

         map.setCenter({
            lat: coordinates?.lat,
            lng: coordinates?.lng
         })
         if (circle) {
            const newZoom = calculateZoomLevel(circle?.radius)
            map.setZoom(newZoom)
            setZoom(newZoom)
         }
         if (setMapLoaded) {
            setMapLoaded(true)
         }
      },
      [coordinates, circle, mapRef, setMapLoaded]
   )

   useEffect(() => {
      if (mapRef.current && circle) {
         const newZoom = calculateZoomLevel(circle?.radius)
         setZoom(newZoom)
         mapRef.current.setZoom(newZoom)
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [circle])

   return isLoaded && mapRef ? (
      <Box>
         <GoogleMap mapContainerStyle={containerStyle} center={coordinates} zoom={zoom} onLoad={onMapLoad}>
            {/* Child components, such as markers, info windows, etc. */}
            {/* @ts-ignore */}
            {markers && markers.length > 0 ? (
               markers.map((marker) => (
                  <Marker key={marker.title} position={{ lat: marker.coordinates.lat, lng: marker.coordinates.lng }} />
               ))
            ) : (
               <Marker position={{ lat: coordinates?.lat, lng: coordinates?.lng }} />
            )}
            {circle && !markers && (
               <Circle
                  center={{
                     lat: coordinates?.lat,
                     lng: coordinates?.lng
                  }}
                  radius={circle.radius}
                  options={circle.options}
               />
            )}
         </GoogleMap>
      </Box>
   ) : (
      <Box
         sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "650px"
         }}>
         <CircularProgress />
      </Box>
   )
}

export default GoogleMapUIBox
