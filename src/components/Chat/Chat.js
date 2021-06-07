import React, { useState, useEffect } from "react";
//querystring utk parse data param url ke string
import queryString from "query-string";
import io from "socket.io-client";

import "./Chat.css";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import { Card, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";

let socket;

function Chat({ location }) {
	const [name, setName] = useState("");
	const [room, setRoom] = useState("");
	const [message, setMessage] = useState("");
	const [messages, setMessages] = useState([]);
	const ENDPOINT = "localhost:5000";

	useEffect(() => {
		//first run when the component render
		//ambil kiriman url dgn (location) ini dari react router (ni adalah props)
		// const data = queryString.parse(location.search);

		//atau lgsg destruct objek kirimannya
		const { name, room } = queryString.parse(location.search);
		// console.log(name, room);
		//ketika ada koneksi pertama, assign let socket & pass endpoint ke server(localhost)
		socket = io(ENDPOINT);

		setName(name);
		setRoom(room);

		//lihat data soket yg didapat
		// console.log(socket);

		//ketika user join, emit socket ke backend, pass data as payload
		// tambahkan param ke 3 dari socket.on backend ut error handling
		//akan dieksekusi jika callback error terpanggil. detruktur lgsg kiriman obj error
		socket.emit("join", { name: name, room: room }, () => {
			// alert(error);
		});

		//return utk menyelesaikan useEffect(unmounting/ dicsonnect)
		//emit socket ke backend dgn event yg sama disconnect
		return () => {
			socket.emit("disconnect");

			//off instance 1 client socket (1 chat person akan off)
			socket.off();
		};

		//specify kpn ketik useeffect dipanggil(passing array)
		//effect akn aktif hanya jika value di list berubah
	}, [ENDPOINT, location.search]);

	useEffect(() => {
		socket.on("message", (message) => {
			setMessages([...messages, message]);
		});
	}, [messages]);

	//function for sending messages
	const sendMessage = (event) => {
		event.preventDefault();

		if (message) {
			socket.emit("sendMessage", message, () => setMessage(""));
		}
	};

	console.log(message, messages);

	return (
		<Container className="customHeightandFlexDirection d-flex align-items-center justify-content-center">
			<InfoBar room={room} />
			<Card className="tw-bg-white cardBoxChat">
				<Messages messages={messages} name={name} />
				<Input
					message={message}
					setMessage={setMessage}
					sendMessage={sendMessage}
				/>
			</Card>
		</Container>
	);
}

export default Chat;
