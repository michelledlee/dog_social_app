import React, { Component } from "react";
import MainTemplate from "./MainTemplate.js";
import "./style/about.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

export default class AboutPage extends Component {
	render() {
		return (
			<MainTemplate>
				<div className="container-fluid aboutMission pt-5 pb-5 mb-5">
					<div
						className="d-flex justify-content-center headerInAbout mt-5"
						id="header1"
					>
						<br />
						<h1>About This App</h1>
					</div>

					<div className="mission description">
						<p>
							If dogs can talk, what do you want to talk to him or
							her? "Your sadness makes me sad." "I'm a dog, I'm
							fun, all I want to do is have fun. When you're sad,
							hormonal or crying, you're really messing with my
							mojo. So, I'm going to jump all over you and push a
							ball in to your face until you get over it and take
							me to the park." "I know how to make you feel
							guilty." My dog knows how to pull the heartbreak
							eyes whenever I leave the house. She knows exactly
							what standing at the front window staring at me with
							her tail dead still does to my emotional stability.
							She knows how to do a big sigh when I'm ignoring her
							and she knows to flop her head on to my lap for pity
							when I get home. She plays the guilt game, and she
							wins every time.
						</p>
					</div>
				</div>

				<div className="container-fluid aboutAuthor">
					<div
						className="d-flex justify-content-center headerInAbout mt-5 mb-5"
						id="header2"
					>
						<h1>Know about the Developers</h1>
					</div>
					<div className="author row d-flex justify-content-around">
						<div className="freddy">
							<Card style={{ width: "18rem" }}>
								<Image
									src="https://github.com/FreddyDoesIT/freddy/blob/master/image/profile.png?raw=true"
									roundedCircle
									fluid
								/>

								<Card.Body>
									<Card.Title>Freddy</Card.Title>
									<Card.Text>
										<p>I Love my life and I love dogs.</p>
									</Card.Text>
									<Button
										variant="primary"
										href="https://freddydoesit.github.io/freddy/"
										target="_blank"
									>
										Personal Webpage
									</Button>
								</Card.Body>
							</Card>
						</div>

						<div className="karen">
							<Card style={{ width: "18rem" }}>
								<Image
									src="https://github.com/QiminCao/HomePage_Karen/blob/master/images/my_profile.PNG?raw=true"
									roundedCircle
									fluid
								/>

								<Card.Body>
									<Card.Title>Karen</Card.Title>
									<Card.Text>
										<p>Husky is so cute.</p>
									</Card.Text>
									<Button variant="primary"
									href="https://qimincao.github.io/HomePage_Karen/"
									target="_blank">
										Personal Webpage
									</Button>
								</Card.Body>
							</Card>
						</div>
					</div>
				</div>
			</MainTemplate>
		);
	}
}
