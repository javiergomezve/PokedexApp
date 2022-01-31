import React from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Platform,
    StyleProp,
    ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    style?: StyleProp<ViewStyle>;
}

const SearchInput = ({style}: Props) => {
    return (
        <View style={{...styles.container, ...(style as any)}}>
            <View style={styles.textBackground}>
                <TextInput
                    placeholder="Search pokemon"
                    style={{
                        ...styles.textInput,
                        top: Platform.OS === 'ios' ? 0 : 2,
                    }}
                    autoCapitalize={false}
                    autoCorrect={false}
                />

                <Icon name="search-outline" color="grey" size={30} />
            </View>
        </View>
    );
};

export default SearchInput;

const styles = StyleSheet.create({
    container: {},
    textBackground: {
        backgroundColor: '#F3F1F3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadwRiu: 3.84,
        elevation: 5,
    },
    textInput: {
        flex: 1,
        fontSize: 18,
    },
});
