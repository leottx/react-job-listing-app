import { nanoid } from 'nanoid';

// Criar o objeto tag
function tag(name, status) {
  this.name = name;
  this.isActive = status;
  this.id = nanoid();
}

// Remove objetos duplicados
function removeCopies(list) {
  return list.filter(
    (current, index, self) =>
      index === self.findIndex((other) => other.name === current.name)
  );
}

// Cria a lista de tags disponiveis
function buildTagsList(jobsList) {
  let languages = [];
  let tools = [];

  for (const job of jobsList) {
    for (const language of job.languages) {
      languages = [...languages, new tag(language, false)];
    }
    for (const tool of job.tools) {
      tools = [...tools, new tag(tool, false)];
    }
  }

  let tagsList = removeCopies([...languages, ...tools]);

  return tagsList;
}

export { buildTagsList };
