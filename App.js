import React, { useState, useRef } from 'react';
import { StyleSheet, View, ScrollView, Alert, Text, Animated, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import MenuItem from './components/MenuItem';
import { categories, menuItems } from './data/menuData';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState({});
  const scrollY = useRef(new Animated.Value(0)).current;

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const addToCart = (item, quantity) => {
    setCart(prevCart => ({
      ...prevCart,
      [item.id]: {
        ...item,
        quantity: (prevCart[item.id]?.quantity || 0) + quantity
      }
    }));
  };

  const removeFromCart = (item, quantity) => {
    setCart(prevCart => {
      const currentQuantity = prevCart[item.id]?.quantity || 0;
      const newQuantity = Math.max(0, currentQuantity - quantity);
      
      if (newQuantity === 0) {
        const newCart = { ...prevCart };
        delete newCart[item.id];
        return newCart;
      }
      
      return {
        ...prevCart,
        [item.id]: {
          ...item,
          quantity: newQuantity
        }
      };
    });
  };

  const orderItem = (item, quantity) => {
    Alert.alert(
      'Xác nhận đặt món',
      `Bạn muốn đặt ${quantity} phần ${item.name}?\n\nGiá: ${item.price}\nTổng: ${(parseInt(item.price.replace(/[^\d]/g, '')) * quantity).toLocaleString()}đ`,
      [
        { text: 'Hủy', style: 'cancel' },
        { 
          text: 'Xác nhận đặt món', 
          onPress: () => {
            Alert.alert(
              'Thành công!', 
              `Đã đặt ${quantity} phần ${item.name} vào giỏ hàng.\n\nBạn có thể tiếp tục chọn món khác hoặc kiểm tra giỏ hàng ở cuối trang.`
            );
          }
        }
      ]
    );
  };

  const handleItemPress = (item) => {
    // Không cần thiết nữa vì đã có nút + - trực tiếp
  };

  const getCartTotal = () => {
    return Object.values(cart).reduce((total, item) => {
      const price = parseInt(item.price.replace(/[^\d]/g, ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const getCartCount = () => {
    return Object.values(cart).reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header scrollY={scrollY} />
      
      <Animated.ScrollView 
        style={styles.content} 
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        <View style={styles.headerSpacer} />
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        
        <View style={styles.menuContainer}>
          {filteredItems.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              onPress={handleItemPress}
              cartQuantity={cart[item.id]?.quantity || 0}
              onAddToCart={addToCart}
              onRemoveFromCart={removeFromCart}
              onOrderItem={orderItem}
            />
          ))}
        </View>
        
        <View style={styles.footer}>
          <LinearGradient
            colors={['#667eea', '#764ba2', '#f093fb']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.footerGradient}
          >
            <View style={styles.footerContent}>
              <Text style={styles.footerText}>🍽️ Nhà Hàng Việt Nam</Text>
              <Text style={styles.footerSubtext}>Hương vị truyền thống • Chất lượng đỉnh cao</Text>
              <Text style={styles.footerContact}>📞 0901 234 567 | 📧 info@nhahangvietnam.com</Text>
              
              {getCartCount() > 0 && (
                <View style={styles.cartInfo}>
                  <Text style={styles.cartText}>🛒 Giỏ hàng: {getCartCount()} món</Text>
                  <Text style={styles.cartTotal}>Tổng tiền: {getCartTotal().toLocaleString()}đ</Text>
                  <TouchableOpacity 
                    style={styles.checkoutButton}
                    onPress={() => Alert.alert('Đặt hàng', 'Chức năng đặt hàng sẽ được cập nhật sau!')}
                  >
                    <Text style={styles.checkoutButtonText}>Đặt hàng ngay</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </LinearGradient>
        </View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  content: {
    flex: 1,
  },
  headerSpacer: {
    height: 80,
  },
  menuContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  footer: {
    marginTop: 20,
    borderRadius: 20,
    overflow: 'hidden',
    marginHorizontal: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  footerGradient: {
    padding: 20,
  },
  footerContent: {
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  footerSubtext: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 12,
    fontStyle: 'italic',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  footerContact: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 12,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  cartInfo: {
    marginTop: 20,
    padding: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 12,
    alignItems: 'center',
    width: '100%',
  },
  cartText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  cartTotal: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  checkoutButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});
