import Tag from "@/components/tag/tag";
import React, {useState} from "react";
import InputContainer from "@/components/inputContainer/inputContainer";

function TagManager() {
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState('');

    const handleTagAdd = () => {
        if (newTag.trim() !== '') {
            // @ts-ignore
            setTags([...tags, newTag]);
            setNewTag('');
        }
    };

    const handleTagDelete = (tagToDelete: never) => {
        const updatedTags = tags.filter(tag => tag !== tagToDelete);
        setTags(updatedTags);
    };

    const handleKeyPress = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            handleTagAdd();
        }
    };

    return (
        <>
            <div id="tag" className="section_tag">
                {tags.map((tag, index) => (
                    <Tag
                        key={index}
                        name={tag}
                        icon="close-circle"
                        size="xs"
                        href="#"
                        // @ts-ignore
                        onClick={() => handleTagDelete(tag)}
                    />
                ))}
            </div>
            <InputContainer
                id="addInstrument"
                type="text"
                placeholder="Ajouter des instruments"
                value={newTag}
                // @ts-ignore
                onChange={(e) => setNewTag(e.target.value)}
                // @ts-ignore
                onKeyPress={handleKeyPress}
            />
        </>
    );
}

export default TagManager;