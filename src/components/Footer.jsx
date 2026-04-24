import React from 'react'

const Footer = () => {
  return (
    <div>
          <section class="row p-4 bg-success">
            {/* <!-- child 1 --> */}
            <div class="col-md-4">
                <h2 class="text-center text-white">About Us</h2>
                <p class="text-white">We have a variety of items that we are selling.our main companny is located at Naivasha,our items are affordable</p>
                <p>For those that are not able to get to our show rooms, stress yourself no more,because after purchasing the car we will deliver it to you wherever you wwant it to be delivered</p>
                   
            </div>
            {/* <!-- child 2 --> */}
            <div class="col-md-4">
                <h2 class="text-center text-white">Contact Us</h2>
                <form action="">
                    <input type="email" class="form-control" placeholder="Enter your email"/><br/><br/>
                    <textarea name="" id="" class="form-control" placeholder="Leave a comment"></textarea><br/><br/>
                    <input type="submit" class="btn btn-outline-danger" value="Send message"/>
                </form>
            </div>
            {/* <!-- child 3 --> */}
            <div class="col-md-4">
                <h2 class="text-center text-white">Stay connected</h2>
                <a href="">
                    <img src="images/fb.png" alt=""/>
                </a>
                <a href="">
                    <img src="images/in.png" alt=""/>
                </a>
                <a href="">
                    <img src="images/x.png" alt=""/>
                </a>
                <p>You can always contact us on our social media platforms @wiseman_motors and place your order.</p>
            </div>
        </section>
         <footer class="row p-4 bg-dark text-white text-center">
        <b>Developed by Aaron &copy; 2026</b>
    </footer>
    </div>
  )
}

export default Footer