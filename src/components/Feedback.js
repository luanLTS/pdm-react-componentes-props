export const FeedBack = (props) => (
    <div className="d-flex justify-content-evenly m-2">
        <button
            type="button"
            className="btn btn-primary"
            onClick={props.funcaoOk}
        >
            {props.textoOk}
        </button>
        <button
            type="button"
            className="btn btn-danger"
            onClick={props.funcaoNok}
        >
            {props.textoNOk}
        </button>
    </div>
)