import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const Header = ({ scrollY }) => {
  const headerHeight = useRef(new Animated.Value(0)).current;
  const headerOpacity = useRef(new Animated.Value(1)).current;
  const logoScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (scrollY) {
      const listener = scrollY.addListener(({ value }) => {
        // Ẩn header khi lướt xuống quá 50px
        if (value > 50) {
          Animated.parallel([
            Animated.timing(headerHeight, {
              toValue: -80,
              duration: 300,
              useNativeDriver: false,
            }),
            Animated.timing(headerOpacity, {
              toValue: 0,
              duration: 300,
              useNativeDriver: false,
            }),
            Animated.timing(logoScale, {
              toValue: 0.8,
              duration: 300,
              useNativeDriver: false,
            }),
          ]).start();
        } else {
          // Hiện header khi lướt lên
          Animated.parallel([
            Animated.timing(headerHeight, {
              toValue: 0,
              duration: 300,
              useNativeDriver: false,
            }),
            Animated.timing(headerOpacity, {
              toValue: 1,
              duration: 300,
              useNativeDriver: false,
            }),
            Animated.timing(logoScale, {
              toValue: 1,
              duration: 300,
              useNativeDriver: false,
            }),
          ]).start();
        }
      });

      return () => scrollY.removeListener(listener);
    }
  }, [scrollY, headerHeight, headerOpacity, logoScale]);

  return (
    <Animated.View 
      style={[
        styles.header,
        {
          transform: [{ translateY: headerHeight }],
          opacity: headerOpacity,
        }
      ]}
    >
      <LinearGradient
        colors={['#667eea', '#764ba2', '#f093fb']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <View style={styles.headerContent}>
          <Animated.View 
            style={[
              styles.logoContainer,
              { transform: [{ scale: logoScale }] }
            ]}
          >
            <View style={styles.logoBackground}>
              <Text style={styles.logo}>🍽️</Text>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.restaurantName}>Nhà Hàng Việt Nam</Text>
              <View style={styles.titleUnderline} />
            </View>
          </Animated.View>
          
          <Text style={styles.tagline}>Hương vị truyền thống • Chất lượng đỉnh cao</Text>
          
          <View style={styles.decorativeElements}>
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>
      </LinearGradient>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    height: 80,
    borderRadius: 0,
    overflow: 'hidden',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
  },
  headerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  logoBackground: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  logo: {
    fontSize: 24,
  },
  titleContainer: {
    alignItems: 'center',
  },
  restaurantName: {
    fontSize: 22,
    fontWeight: '800',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    letterSpacing: 0.5,
  },
  titleUnderline: {
    width: 40,
    height: 3,
    backgroundColor: '#fff',
    borderRadius: 2,
    marginTop: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  tagline: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: '500',
    letterSpacing: 0.3,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  decorativeElements: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 8,
    justifyContent: 'center',
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    marginHorizontal: 3,
  },
});

export default Header;
