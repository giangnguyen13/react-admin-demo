import React, { useState } from "react";
import { Button, IconButton } from "@mui/material";
import { ModeEdit } from "@mui/icons-material";
import { Cancel } from "@mui/icons-material";
import { Done } from "@mui/icons-material";
import { HighlightOff } from "@mui/icons-material";
import { CheckCircleOutline } from "@mui/icons-material";

const EditActionButton = () => {
  const [editMode, setEditMode] = useState(false);
  return editMode ? (
    <>
      <IconButton
        color='success'
        size='small'
        onClick={() => setEditMode(!editMode)}
      >
        <CheckCircleOutline />
      </IconButton>
      <IconButton
        color='error'
        size='small'
        onClick={() => setEditMode(!editMode)}
      >
        <HighlightOff />
      </IconButton>
    </>
  ) : (
    // <IconButton onClick={() => setEditMode(!editMode)}>
    //   < ModeEdit/>
    // </IconButton>
    <Button
      size='small'
      color='primary'
      startIcon={<ModeEdit />}
      onClick={() => setEditMode(!editMode)}
    >
      Edit
    </Button>
  );
  // return <div>EditActionButton</div>;
};

export default EditActionButton;
