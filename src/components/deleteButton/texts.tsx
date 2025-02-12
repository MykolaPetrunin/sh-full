export const deleteButtonTexts = {
    title: `Delete product`,
    description: (productName: string) => (
        <>
            Are you sure you want to delete <b>{productName}</b>?
        </>
    ),
    buttons: {
        cancel: `Cancel`,
        delete: `Delete`
    }
};
