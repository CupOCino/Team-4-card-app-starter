# C219 Week 10 Card App (Student Starter Repo)

This is a starter codebase: Frontend–Backend Integration with React Router + CRUD.

You will complete the TODOs to build a Card Management App that talks to your deployed Express API.

---

## Routes (Required)

- `/` Home
- `/allassignments` View all cards
- `/addassignment` Add a new assignment
- `/updateassignment/:id/edit` Edit an specific assignment
- `/deleteassignment/:id` Delete a specific assignment

## Backend API Contract (Required)

- `GET    /allassignments`
- `POST   /addassignment`
- `PUT    /updateassignment/:id`
- `DELETE /deleteassignment/:id`

Expected card JSON shape:

```json
{ "id": 1, "module_name": "C219", "assignment_title": "CA2", "status": "in progress" }
```
