import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MenuItem = ({ item, onAddToCart, onRemoveFromCart, onOrderItem }) => {
    const [quantity, setQuantity] = useState(0);

    const handleAdd = () => {
        setQuantity(prev => prev + 1);
        onAddToCart(item, 1);
    };

    const handleRemove = () => {
        if (quantity > 0) {
            setQuantity(prev => prev - 1);
            onRemoveFromCart(item, 1);
        }
    };

    const handleOrder = () => {
        if (quantity > 0) {
            onOrderItem(item, quantity);
            setQuantity(0); // Reset số lượng sau khi đặt
        }
    };

    return (
        <View style={styles.menuItem}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />

            <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
            </View>

            <View style={styles.controlsContainer}>
                {quantity === 0 ? (
                    <TouchableOpacity
                        style={styles.addButton}
                        onPress={handleAdd}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.addButtonText}>Thêm</Text>
                    </TouchableOpacity>
                ) : (
                    // Bọc các nút điều khiển và nút Đặt món vào một View chung
                    <View style={styles.actionContainer}>
                        <View style={styles.quantityContainer}>
                            <TouchableOpacity
                                style={styles.quantityButton}
                                onPress={handleRemove}
                                activeOpacity={0.7}
                            >
                                <Text style={styles.quantityButtonText}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.quantityText}>{quantity}</Text>
                            <TouchableOpacity
                                style={styles.quantityButton}
                                onPress={handleAdd}
                                activeOpacity={0.7}
                            >
                                <Text style={styles.quantityButtonText}>+</Text>
                            </TouchableOpacity>
                        </View>
                        
                        {/* Nút Đặt món mới, chỉ hiển thị khi số lượng > 0 */}
                        <TouchableOpacity
                            style={styles.orderButton}
                            onPress={handleOrder}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.orderButtonText}>Đặt món</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 6,
    },
    itemImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 15,
    },
    itemInfo: {
        flex: 1,
        justifyContent: 'center',
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: '600',
        color: '#e74c3c',
    },
    controlsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    // Style mới: Container cho cả cụm tăng giảm số lượng và nút đặt món
    actionContainer: {
        alignItems: 'center',
    },
    addButton: {
        backgroundColor: '#e74c3c',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        alignItems: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        borderRadius: 20,
        paddingHorizontal: 5,
    },
    quantityButton: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#2ecc71',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
    },
    quantityButtonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    quantityText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        minWidth: 25,
        textAlign: 'center',
    },
    // Style mới: Nút Đặt món
    orderButton: {
        marginTop: 10, // Tạo khoảng cách với phần chọn số lượng
        backgroundColor: '#3498db', // Màu xanh dương để phân biệt
        paddingVertical: 8,
        paddingHorizontal: 18,
        borderRadius: 20,
        alignItems: 'center',
    },
    // Style mới: Chữ trên nút Đặt món
    orderButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default MenuItem;