import { card as cardInterface } from '../utils/interfaces'

const Card = (props:cardInterface):JSX.Element => {
    return (
        <div className="CardComponent">
            <img className="CardComponent__img" src={props.image}></img>
            <style jsx>
                {`
                    .CardComponent {
                        display: inline-block;
                        height: 150px;
                        width: 110px;
                    }

                    .CardComponent__img {
                        height: 100%;
                        width: 100%;
                        object-fit: fill;
                    }
                `}
            </style>
        </div>
    )
}

export default Card