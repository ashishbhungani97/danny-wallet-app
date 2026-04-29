import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LMGradient from './LMGradient';

export default function LMButton({...rest}) {
  const {
    label,
    labelStyle,
    style,
    backgroundColor,
    useGradient,
    containerStyle,
    ...touchableProps
  } = {...rest};
  const flattenedStyle = StyleSheet.flatten(style) || {};
  const {backgroundColor: styleBackgroundColor, ...touchableStyle} =
    flattenedStyle;
  const resolvedBackgroundColor = backgroundColor || styleBackgroundColor;
  const shouldUseGradient =
    useGradient === undefined ? !resolvedBackgroundColor : useGradient;

  return (
    <TouchableOpacity
      {...touchableProps}
      style={[styles.touchable, touchableStyle]}>
      {shouldUseGradient ? (
        <LMGradient style={[styles.container, containerStyle]}>
          <Text style={[styles.label, labelStyle]}>{label}</Text>
        </LMGradient>
      ) : (
        <View
          style={[
            styles.container,
            {backgroundColor: resolvedBackgroundColor},
            containerStyle,
          ]}>
          <Text style={[styles.label, labelStyle]}>{label}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  touchable: {
    width: '100%',
    height: 60,
    borderRadius: 5,
    overflow: 'hidden',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: 'white',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: 'bold',
  },
});
