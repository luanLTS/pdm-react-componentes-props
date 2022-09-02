export const FeedBack = ({funcaoOk, funcaoNOk, textoOk, textoNOk}) => (
    <div className="d-flex justify-content-evenly m-2">
        <button
            type="button"
            className="btn btn-primary"
            onclick={funcaoOk}
        >
            {textoOk}
        </button>
        <button
            type="button"
            className="btn btn-danger"
            onclick={funcaoNOk}
        >
            {textoNOk}
        </button>
    </div>
)