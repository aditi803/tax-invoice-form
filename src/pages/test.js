import React from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import "../styles/form.css"
// import * as Images from "../utilities/images";

const InvoiceForm = () => {
    
    return (
        <section className='invoice-form'>
            <main>
                <div class="table-responsive">
                    <table class="table" style="color:#000;">
                        <tr>
                            <td class="BrandDetails">
                                <article style="width: 100%; display: flex; align-items: center;">
                                    <p class="text-1 mb-0" style="color: #3C444D; ">1</p>
                                    <ul>
                                        <li class="text-0" style="color: #14171A;">Marlboro Red Gold</li>
                                        <li class="text-0" style="color: #626262;"><span>Color: Grey </span><span
                                            class="ps-2">Size: Color</span></li>
                                    </ul>
                                </article>
                                <p class="text-1" style="color: #3C444D;">$6.56</p>
                            </td>
                            <td class="BrandDetails">
                                <article style="width: 100%; display: flex; align-items: center;">
                                    <p class="text-1 mb-0" style="color: #3C444D; ">1</p>
                                    <ul>
                                        <li class="text-0" style="color: #14171A;">Marlboro Red Gold</li>
                                        <li class="text-0" style="color: #626262;"><span>Color: Grey </span><span
                                            class="ps-2">Size: Color</span></li>
                                    </ul>
                                </article>
                                <p class="text-1" style="color: #3C444D;">$6.56</p>
                            </td>
                            <td class="BrandDetails">
                                <article style="width: 100%; display: flex; align-items: center;">
                                    <p class="text-1 mb-0" style="color: #3C444D; ">1</p>
                                    <ul>
                                        <li class="text-0" style="color: #14171A;">Marlboro Red Gold</li>
                                        <li class="text-0" style="color: #626262;"><span>Color: Grey </span><span
                                            class="ps-2">Size: Color</span></li>
                                    </ul>
                                </article>
                                <p class="text-1" style="color: #3C444D;">$6.56</p>
                            </td>
                            <td class="BrandDetails">
                                <article style="width: 100%; display: flex; align-items: center;">
                                    <p class="text-1 mb-0" style="color: #3C444D; ">1</p>
                                    <ul>
                                        <li class="text-0" style="color: #14171A;">Marlboro Red Gold</li>
                                        <li class="text-0" style="color: #626262;"><span>Color: Grey </span><span
                                            class="ps-2">Size: Color</span></li>
                                    </ul>
                                </article>
                                <p class="text-1" style="color: #3C444D;">$6.56</p>
                            </td>
                        </tr>
                        <tr>
                            <td class="amountBox">
                                <h6 class="text-2 mb-0 fw-400" style="color: #000000;">Sub-Total</h6>
                                <p class="text-2 mb-0 fw-400" style="color: #14171A;">$7,363.20</p>
                            </td>
                        </tr>
                        <tr>
                            <td class="amountBox">
                                <h6 class="text-2 mb-0 fw-400" style="color: #000000;">Discount ( MIDApril100)</h6>
                                <p class="text-2 mb-0 fw-400" style="color: #14171A;">$7,363.20</p>
                            </td>
                        </tr>
                        <tr>
                            <td class="amountBox">
                                <h6 class="text-2 mb-0 fw-400" style="color: #000000;">Shipping Charrg</h6>
                                <p class="text-2 mb-0 fw-400" style="color: #14171A;">$7,363.20</p>
                            </td>
                        </tr>
                        <tr>
                            <td class="amountBox">
                                <h6 class="text-2 mb-0 fw-500" style="color: #000000;">Total</h6>
                                <p class="text-2 mb-0 fw-500" style="color: #14171A;">$7001.20</p>
                            </td>
                        </tr>
                        <tr>
                            <td class="detailBox"
                                style="border-bottom: 0 !important; padding: 6px 1rem !important; padding: 0 !important;">
                                <p class="borderBox text-1 "
                                    style="border-top: 1px solid  #D8D8D8; padding-top: 20px; color: #3C444D;"> Payment
                                    option: <span class="fw-600" style="color:#14171A;">Cash</span></p>
                                <p class="text-1" style="color: #3C444D;">Wed 26 Apr , 2023 </p>
                                <p class="text-1" style="color: #3C444D;">Walk-In</p>
                                <p class="text-1" style="color: #3C444D;">Invoice No. # 3467589</p>
                                <p class="text-1" style="color: #3C444D;">POS No. #Front-CC01</p>
                                <p class="text-1" style="color: #3C444D;">User ID : ****128</p>
                            </td>
                        </tr>
                    </table>
                </div>
            </main>

        </section>
    );
}
export default InvoiceForm