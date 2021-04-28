export default function Card(props){
    return <>
    <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{props.data.plan}</h5>
            <h6 class="card-price text-center">{props.data.currency}{props.data.price}<span class="period">/month</span></h6>
            <hr/>
            <ul class="fa-ul">


                {
                    props.data.offers.map((offer)=>{
                        return <li className={offer.isEnabled ?"" : "text-muted"}><span class="fa-li"><i className={`fas ${offer.isEnabled ? 'fa-check': 'fa-times'}`}></i></span>{offer.name}</li>
                    })
                }
            </ul>
            <a href="#" class="btn btn-block btn-primary text-uppercase">Button</a>
          </div>
        </div>
      </div>
    </>
}