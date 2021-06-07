import React from "react";
import closeIcon from "../../icons/closeIcon.png";
import onlineIcon from "../../icons/onlineIcon.png";
import "./InfoBar.css";
import { Card, Row, Col } from "react-bootstrap";

const InfoBar = ({ room }) => (
	<>
		<Row className="d-flex align-items-center justify-content-center">
			<Card className="tw-bg-base cardCustomChat">
				<Row>
					<Col className="d-flex justify-content-start align-items-center">
						<div className="tw-pl-5">
							<img className="onlineIcon" src={onlineIcon} alt="online" />
						</div>
						<div className="tw-text-sm tw-pl-3">
							<p className="tw-text-white tw-font-bold tw-text-base">Room {room}</p>
						</div>
					</Col>
					<Col className="d-flex justify-content-end align-items-center">
						{" "}
						<div className="tw-pr-5">
							<a href="/">
								<img src={closeIcon} alt="close" />
							</a>
						</div>
					</Col>
				</Row>
			</Card>
		</Row>
	</>
);

export default InfoBar;
