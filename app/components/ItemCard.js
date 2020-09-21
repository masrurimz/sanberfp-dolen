import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";

export default function ItemCard({
  image,
  title,
  price,
  size = { width, height },
}) {
  return (
    <TouchableOpacity
      style={[styles.container, { width: size.width, height: size.height }]}
    >
      <Image
        source={image}
        style={[styles.image, { width: size.width }]}
        resizeMode="cover"
      />
      <View style={styles.details}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    overflow: "hidden",
    borderColor: colors.light,
    borderWidth: 1,
  },
  details: {
    padding: 7,
  },
  image: {
    height: "70%",
  },
  price: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.primary,
  },
  title: {
    fontSize: 12,
    fontWeight: "400",
    color: colors.black,
  },
});
