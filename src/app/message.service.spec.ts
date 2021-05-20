import { MessageService } from "./message.service"

describe("MessageService", () => {
    let service = new MessageService;

    beforeEach(() => {
        service = new MessageService()
    })

    it("should have no message to start", () => {
        service = new MessageService()

        expect(service.messages.length).toEqual(0)
    })

    it("should add a message when add is called", () => {
        // Arrange
        service = new MessageService()

        // Act
        service.add("message1")

        // Assert
        expect(service.messages.length).toEqual(1)
    })

    it("should remove all messages when clear is called", () => {
        // Arrange
        service = new MessageService()
        service.add("message1")

        // Act
        service.clear()

        // Assert
        expect(service.messages.length).toEqual(0)
    })
})