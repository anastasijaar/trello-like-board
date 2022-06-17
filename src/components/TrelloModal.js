import { useState } from 'react';

const TrelloModal = () => {
    const [open, setOpen] = useState(false);

    function handleOpenModal() {
        setOpen(!open);
    }

    return {
        open,
        handleOpenModal,
    }
};

export default TrelloModal;