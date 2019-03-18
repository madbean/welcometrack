const clientsRepository = repository => {
    return {
        save: repository.save,
    }
}

module.exports = clientsRepository;