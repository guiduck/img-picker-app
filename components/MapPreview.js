import React from 'react';
import { Image, StyleSheet } from 'react-native';

const MapPreview = (props) => {
  imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.lat},${props.location.lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C${props.location.lat},${props.location.lng}&key=AIzaSyDfUwiBUHxDtAbC4rDk_exkMo4_Z9n3mCY`;
};

const styles = StyleSheet.create({});

export default MapPreview;
