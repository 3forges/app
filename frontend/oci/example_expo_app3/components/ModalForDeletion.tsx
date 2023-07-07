import React from "react";
import {
  Text,
  View,
  Modal, 
  Pressable,
	StyleSheet, 
} from "react-native";
import User, { PestoUser } from "./User";
import { useDispatch, useSelector } from "react-redux";
import { addUsers, dumpUsers } from "../userSlice";

export function ModalForUserDeletion(props: any) {
	const userRedux = useSelector((state: any) => state.userRedux.value) // Reading the state
	const dispatch = useDispatch();
	const index = props.index

	function handleClick(index: number, action: string) {
		if (action == "delete") deleteUser(index)
		props?.onClick?.(index, action)
	}

	function deleteUser(index: number) {
		let itemsCopy = [...userRedux]
		itemsCopy.splice(index, 1);
		dispatch(dumpUsers(itemsCopy))
	}

	return(
		<Modal
			animationType="slide"
			transparent={true}
			visible={ props.visible }
			onRequestClose={() => {
				handleClick(index, 'closeModal');
			}}>
			<View style={styles.modalView}>
					<Text>Voulez vous supprimer l'utilisateur #{index}. {userRedux[index].name} ?</Text>
					<Pressable onPress={() => { 
							handleClick(index, 'delete')
					}}>
						<Text>oui</Text>
					</Pressable>
					<Pressable onPress={() => handleClick(index, 'closeModal')}>
						<Text>non</Text>
					</Pressable>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
		alignItems: "flex-end",
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
	},
})