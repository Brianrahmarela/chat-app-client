// import usestate yg merupakan hook utk pakai state di dlm function base component
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Card, Row, Button, Col, Container } from "react-bootstrap";
import "./Join.css";

import SvgRoom from '../../iconcomponents/Room';
import SvgUserName from '../../iconcomponents/UserName';
import Logo from '../../iconcomponents/Logo';
// import chaticon from '../../assets/chat-icon.svg';
// import {Button} from '../Button/Button.style'
// Import { ButtonSignIn } from './';

function Join() {
	const [name, setName] = useState("");
	const [room, setRoom] = useState("");

	return (
		<Container className="customHeightandFlexDirection d-flex align-items-center justify-content-center">
			<Row className="d-flex align-items-center justify-content-center">
				<Card className="tw-bg-base cardCustom align-items-center">
				<Logo/>

				<Card.Title className="tw-text-white tw-text-sm tw-mt-2">Welcome in Real Chat!</Card.Title>
				</Card>

				
				{/* <div>
				<h1>TES</h1>
				</div> */}
			</Row>
			<Row className="">
				<Col>
					<Form className="mx-auto">
			      <Card.Title className="titleJoin">Join and Chat Now</Card.Title>
						<Form.Group controlId="username">
							<Row className="align-items-center mx-auto">
								<Col xs={1}>
									<SvgUserName/>
								</Col>
								<Col xs={10} sm={11} md={10} lg={10} xl={10}>
							<Form.Control
								className="inputan mx-auto inputID"
								type="text"
								placeholder="Enter your username"
								autoComplete="username"
								onChange={(event) => setName(event.target.value)}
							/>
								</Col>
							</Row>
						</Form.Group>
						<Form.Group controlId="room">
							<Row className="align-items-center mx-auto">
								<Col xs={1}>
									<SvgRoom/>
								</Col>
								<Col xs={10} sm={11} md={10} lg={10} xl={10}>
							<Form.Control
								className="inputan mx-auto inputID"
								type="text"
								placeholder="Enter your room"
								autoComplete="room"
								onChange={(event) => setRoom(event.target.value)}
							/>
								</Col>
							</Row>
						</Form.Group>
						<Link
							onClick={(event) =>
								!name || !room ? event.preventDefault() : null
							}
							to={`/chat?name=${name}&room=${room}`}
						>
							{/* <Button type="submit" className="ButtonSignIn">
								Sign In
							</Button> */}
							<Button
							type="submit"
							variant="primary"
							className="tw-bg-secondary tw-border-secondary tw-shadow-secondary buttonSignIn"
						>
							Sign In
						</Button>
						</Link>
					</Form>
				</Col>
			</Row>
		</Container>
	);
}

export default Join;
