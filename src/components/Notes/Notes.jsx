import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Button,
  Container,
  Grid,
  Card,
  Input,
  VStack,
  HStack,
} from "@chakra-ui/react";
import moment from "moment"; 
import "./Notes.css";

const Notes = () => {
  // Состояние для хранения заметок
  const [notes, setNotes] = useState([]);

  // Состояние для отслеживания текущей редактируемой заметки
  const [newNote, setNewNote] = useState({ title: "", content: "" });

  // Состояние для отслеживания индекса заметки, которую нужно редактировать
  const [editIndex, setEditIndex] = useState(null);

  // Эффект, который загружает заметки из localStorage при монтировании компонента
  useEffect(() => {
    // Получаем заметки из localStorage или пустой массив, если нет сохраненных данных
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    // Устанавливаем заметки в состояние
    setNotes(storedNotes);
  }, []);

  // Функция для добавления или обновления заметки
  const addNote = () => {
    // Проверка на пустые поля
    if (newNote.title.trim() === "" || newNote.content.trim() === "") {
      return; // Предотвращаем добавление пустых заметок
    }

    // Форматирование текущей даты
    const createdAt = moment().format("MMMM Do YYYY, h:mm:ss a");
    
    // Создание объекта новой заметки
    const newNoteObject = {
      title: newNote.title,
      content: newNote.content,
      createdAt: createdAt,
    };

    // Если редактируется существующая заметка, обновляем её
    if (editIndex !== null) {
      const updatedNotes = [...notes];
      updatedNotes[editIndex] = newNoteObject;
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      setNotes(updatedNotes);
      setEditIndex(null);
    } else {
      // Иначе добавляем новую заметку
      const updatedNotes = [...notes, newNoteObject];
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      setNotes(updatedNotes);
    }

    // Очищаем состояние для ввода новой заметки
    setNewNote({ title: "", content: "" });
  };

  // Функция для ограничения длины заголовка заметки
  const updateNoteTitle = (value) => {
    // Ограничиваем длину заголовка
    const limitedTitle = value.slice(0, 22);
    setNewNote({ ...newNote, title: limitedTitle });
  };

  // Функция для редактирования существующей заметки
  const editNote = (index) => {
    // Копируем содержимое выбранной заметки в состояние для редактирования
    setNewNote({ ...notes[index] });
    setEditIndex(index);
  };

  // Функция для удаления заметки
  const deleteNote = (index) => {
    // Удаляем выбранную заметку из состояния
    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes];
      updatedNotes.splice(index, 1);
      // Сохраняем обновленные заметки в localStorage
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      return updatedNotes;
    });
  };

  return (
    <Box className="notes-container">
      <VStack spacing={4} p={4}>
        <Text fontSize="2xl" fontWeight="bold">
          Notes
        </Text>
        {/* Поле ввода заголовка заметки */}
        <Input
          placeholder="Заголовок"
          value={newNote.title}
          onChange={(e) => updateNoteTitle(e.target.value)}
        />
        {/* Поле ввода содержания заметки */}
        <Input
          placeholder="Содержание"
          value={newNote.content}
          onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
        />
        {/* Кнопка для добавления или обновления заметки */}
        <Button onClick={addNote}>
          {editIndex !== null ? "Обновить заметку" : "Сохранить заметку"}
        </Button>
      </VStack>

      {/* Контейнер для отображения списка заметок */}
      <Container className="notes-content" maxW="container.md" pt={4}>
        {/* Сетка для отображения заметок */}
        <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={4}>
          {notes.map((note, index) => (
            // Карточка с информацией о заметке
            <Grid key={index} className="note-card">
              <Card shadow="md" p={4} rounded="md">
                {/* Заголовок заметки */}
                <HStack spacing={4}>
                  <Text className="note-title" fontSize="xl" fontWeight="bold">
                    {note.title}
                  </Text>
                </HStack>
                {/* Содержание заметки */}
                <Text>{note.content}</Text>
                {/* Дата создания заметки */}
                <Text fontSize="sm" color="gray.500">
                  Создано: {note.createdAt}
                </Text>
                {/* Кнопки для редактирования и удаления заметки */}
                <Grid className="note-btns">
                  <Button
                    onClick={() => editNote(index)}
                    variant="ghost"
                    className="edit-button"
                  >
                    Редактировать
                  </Button>
                  <Button
                    onClick={() => deleteNote(index)}
                    variant="ghost"
                    className="delete-button"
                  >
                    Удалить
                  </Button>
                </Grid>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Notes;
