import React, { useContext, useState } from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const UserMainMenu = () => {
	const { store, actions } = useContext(Context);
	const [special_instructions, setSpecial_instructions] = useState("");
	const [quantity, setQuantity] = useState(1);
	return (
		<div className="container-fluid">
			<div className="jumbotron2 image mb-3">
				<h1 className="display-4 text-center text-dark">{"Find Your Craving Here"}</h1>
				<p className="lead text-center text-dark">
					<strong>{"Chefs don't make mistakes; they make new dishes"}</strong>
				</p>
				<p className="lead">
					<a className="btn btn-dark text-white btn-lg" href="#" role="button">
						{"Search for a Vendor"}
					</a>
				</p>
			</div>
			<div className="d-flex">
				<div className="menu-view border border-dark m-auto">
					<h1>{"menu view"}</h1>
				</div>
				<div className="shopping-cart border border-dark ml-auto w-50">
					<section>
						<div className="row d-flex flex-column">
							<div className="pl-4 pr-4">
								<div className="mb-3">
									<div className="pt-4 wish-list">
										<h5 className="mb-4">
											Cart (<span>2</span> items)
										</h5>

										<div className="row mb-4">
											<div className="col-md-5 col-lg-3 col-xl-3">
												<div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
													<img
														className="img-fluid w-100"
														src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
														alt="Sample"
													/>
												</div>
											</div>
											<div className="col-md-7 col-lg-9 col-xl-9">
												<div>
													<div className="d-flex justify-content-between">
														<div>
															<h5>Burger</h5>
															<p className="mb-3 text-muted text-uppercase small">
																{"Special Intructions:"}
															</p>
															<input
																onChange={event =>
																	setSpecial_instructions(event.target.value)
																}
																type="text"
																id="name"
																name="name"
															/>
														</div>
														<div className="">
															<div className="col col-qty d-flex text-center w-75">
																<a
																	href="#"
																	className="qty qty-minus w-25"
																	onClick={() => setQuantity(quantity - 1)}>
																	{"-"}
																</a>
																<input
																	className="w-50 text-center"
																	type="numeric"
																	value={quantity}
																/>
																<a
																	href="#"
																	className="qty qty-plus w-25"
																	onClick={() => setQuantity(quantity + 1)}>
																	{"+"}
																</a>
															</div>
														</div>
													</div>
													<div className="d-flex justify-content-between align-items-center">
														<div>
															<a
																href="#!"
																type="button"
																className="card-link-secondary small text-uppercase mr-3">
																<i className="fas fa-trash-alt mr-1" /> Remove item{" "}
															</a>
															<a
																href="#!"
																type="button"
																className="card-link-secondary small text-uppercase"
															/>
														</div>
														<p className="mb-0">
															<span>
																<strong id="summary">$17.99</strong>
															</span>
														</p>
													</div>
												</div>
											</div>
										</div>
										<hr className="mb-4" />
										<div className="row mb-4">
											<div className="col-md-5 col-lg-3 col-xl-3">
												<div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
													<img
														className="img-fluid w-100"
														src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
														alt="Sample"
													/>
												</div>
											</div>
											<div className="col-md-7 col-lg-9 col-xl-9">
												<div>
													<div className="d-flex justify-content-between">
														<div>
															<h5>Blue denim shirt</h5>
															<p className="mb-3 text-muted text-uppercase small">
																Shirt - blue
															</p>
															<p className="mb-2 text-muted text-uppercase small">
																Color: blue
															</p>
															<p className="mb-3 text-muted text-uppercase small">
																Size: M
															</p>
														</div>
														<div>
															<div className="col col-qty d-flex text-center w-75">
																<a href="#" className="qty qty-minus w-25">
																	-
																</a>
																<input
																	className="w-50 text-center"
																	type="numeric"
																	value="3"
																/>
																<a href="#" className="qty qty-plus w-25">
																	+
																</a>
															</div>
														</div>
													</div>
													<div className="d-flex justify-content-between align-items-center">
														<div>
															<a
																href="#!"
																type="button"
																className="card-link-secondary small text-uppercase mr-3">
																<i className="fas fa-trash-alt mr-1" /> Remove item{" "}
															</a>
															<a
																href="#!"
																type="button"
																className="card-link-secondary small text-uppercase"
															/>
														</div>
														<p className="mb-0">
															<span>
																<strong id="summary">$17.99</strong>
															</span>
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="mb-3">
									<div className="pt-4">
										<h5 className="mb-4">We accept</h5>

										<img
											className="payment mr-2"
											width="20px"
											src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
											alt="Visa"
										/>
										<img
											className="payment mr-2"
											width="20px"
											src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
											alt="American Express"
										/>
										<img
											className="payment mr-2"
											width="20px"
											src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
											alt="Mastercard"
										/>
										<img
											className="payment mr-2"
											width="20px"
											src="https://mdbootstrap.com/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
											alt="PayPal acceptance mark"
										/>
									</div>
								</div>
							</div>

							<div className="tally pr-4 pl-4">
								<div className="mb-3">
									<div className="pt-4">
										<h5>Tally Up</h5>
										<ul className="list-group list-group-flush">
											<li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
												Subtotal
												<span>$25.98</span>
											</li>
											<li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
												<div>
													<strong>Total Price</strong>
												</div>
												<span>
													<strong>$53.98</strong>
												</span>
											</li>
										</ul>

										<button type="button" className="btn btn-primary btn-block">
											go to checkout
										</button>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
};
