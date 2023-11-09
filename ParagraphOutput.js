

function ParagraphOutput(props){

    const {isShown} = props;

    return (
        <p>{isShown ? 'ShownParagraph' : ''}</p>
    )
}
export default ParagraphOutput;