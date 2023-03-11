import styled from 'styled-components';

export const Filter = ({ searchStr, onChangeInput }) => {
  const handleChange = event => {
    onChangeInput(event.target.value);
  };
  return (
    <div>
      <ContactLabel>
        Find contacts by name
        <Contactinput
          type="text"
          className="form-control"
          placeholder="Type to search ..."
          value={searchStr}
          onChange={handleChange}
        />
      </ContactLabel>
    </div>
  );
};

const ContactLabel = styled.label`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Contactinput = styled.input`
  height: 25px;
  width: 400px;
`;
